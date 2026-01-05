'use client'

import React, { useState, useRef, useEffect } from 'react'

interface SimpleDropdownProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: 'left' | 'right'
  className?: string
}

interface SimpleDropdownItemProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export function SimpleDropdown({ trigger, children, align = 'left', className = '' }: SimpleDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close dropdown on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const closeDropdown = () => setIsOpen(false)

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>
      
      {isOpen && (
        <div
          className={`
            absolute top-full mt-2 min-w-[160px] bg-white border border-gray-200 
            rounded-md shadow-lg z-50 py-1 
            ${align === 'right' ? 'right-0' : 'left-0'} 
            ${className}
          `}
        >
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child as React.ReactElement<SimpleDropdownItemProps & { onInternalClick?: () => void }>, { 
                onInternalClick: closeDropdown 
              })
            }
            return child
          })}
        </div>
      )}
    </div>
  )
}

export function SimpleDropdownItem({ 
  children, 
  onClick, 
  onInternalClick,
  className = '' 
}: SimpleDropdownItemProps & { onInternalClick?: () => void }) {
  
  const handleClick = () => {
    console.log('SimpleDropdownItem clicked')
    if (onClick) {
      onClick()
    }
    if (onInternalClick) {
      onInternalClick()
    }
  }

  return (
    <div
      className={`
        px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer 
        flex items-center transition-colors duration-150
        ${className}
      `}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}
