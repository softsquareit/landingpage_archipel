'use client'

import React, { useState, useRef, useEffect, ReactNode } from 'react'

interface DropdownMenuProps {
  trigger: ReactNode
  children: ReactNode
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

interface DropdownMenuItemProps {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
  href?: string
}

interface DropdownMenuSeparatorProps {
  className?: string
}

interface DropdownMenuLabelProps {
  children: ReactNode
  className?: string
}

// Main DropdownMenu component
export function DropdownMenu({ 
  trigger, 
  children, 
  align = 'start', 
  side = 'bottom',
  className = ''
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

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

  const getAlignmentClasses = () => {
    switch (align) {
      case 'center':
        return 'left-1/2 transform -translate-x-1/2'
      case 'end':
        return 'right-0'
      default:
        return 'left-0'
    }
  }

  const getSideClasses = () => {
    switch (side) {
      case 'top':
        return 'bottom-full mb-2'
      case 'left':
        return 'right-full mr-2 top-0'
      case 'right':
        return 'left-full ml-2 top-0'
      default:
        return 'top-full mt-2'
    }
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        {trigger}
      </div>
      
      {isOpen && (
        <div
          className={`
            absolute z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 
            bg-white p-1 text-gray-950 shadow-md animate-in fade-in-0 zoom-in-95
            ${getSideClasses()} ${getAlignmentClasses()} ${className}
          `}
          style={{
            animation: 'fadeIn 0.1s ease-out'
          }}
          onClick={(e) => {
            console.log('Dropdown container clicked')
            // Only close if clicking directly on the container, not on menu items
            if (e.target === e.currentTarget) {
              setIsOpen(false)
            }
          }}
        >
          {children}
        </div>
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-in {
          animation: fadeIn 0.1s ease-out;
        }
      `}</style>
    </div>
  )
}

// DropdownMenuItem component
export function DropdownMenuItem({ 
  children, 
  onClick, 
  disabled = false, 
  className = '',
  href
}: DropdownMenuItemProps) {
  const baseClasses = `
    relative flex items-center rounded-sm px-2 py-1.5 text-sm 
    outline-none transition-colors
  `
  
  const interactiveClasses = disabled 
    ? 'opacity-50 cursor-not-allowed pointer-events-none' 
    : 'hover:bg-gray-100 hover:text-gray-900 cursor-pointer text-gray-700'

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('DropdownMenuItem clicked, disabled:', disabled, 'onClick:', !!onClick)
    if (!disabled && onClick) {
      onClick()
    }
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${interactiveClasses} ${className}`}
        onClick={handleClick}
        data-disabled={disabled}
        data-dropdown-item="true"
      >
        {children}
      </a>
    )
  }

  return (
    <div
      className={`${baseClasses} ${interactiveClasses} ${className}`}
      onClick={handleClick}
      data-disabled={disabled}
      data-dropdown-item="true"
    >
      {children}
    </div>
  )
}

// DropdownMenuSeparator component
export function DropdownMenuSeparator({ className = '' }: DropdownMenuSeparatorProps) {
  return (
    <div className={`-mx-1 my-1 h-px bg-gray-200 ${className}`} />
  )
}

// DropdownMenuLabel component
export function DropdownMenuLabel({ children, className = '' }: DropdownMenuLabelProps) {
  return (
    <div className={`px-2 py-1.5 text-sm font-semibold text-gray-900 ${className}`}>
      {children}
    </div>
  )
}

// Trigger component for easier usage
export function DropdownMenuTrigger({ children, className = '' }: { children: ReactNode, className?: string }) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      {children}
    </div>
  )
}

// Content wrapper for better semantic structure
export function DropdownMenuContent({ children }: { children: ReactNode }) {
  return <>{children}</>
}
