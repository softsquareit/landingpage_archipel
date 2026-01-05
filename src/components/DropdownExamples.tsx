import { 
  DropdownMenu, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuLabel
} from './ui/DropdownMenu'

export default function DropdownExamples() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Dropdown Menu Examples</h1>
      
      {/* Basic Dropdown */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Basic Dropdown</h2>
        <DropdownMenu
          trigger={
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Basic Menu
            </button>
          }
        >
          <DropdownMenuItem onClick={() => alert('Edit clicked')}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => alert('Delete clicked')}>
            Delete
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>
            Disabled Item
          </DropdownMenuItem>
        </DropdownMenu>
      </div>

      {/* Dropdown with Icons */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Dropdown with Icons</h2>
        <DropdownMenu
          trigger={
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
              Actions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          }
        >
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => alert('Profile clicked')}>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => alert('Settings clicked')}>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => alert('Logout clicked')}>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </DropdownMenuItem>
        </DropdownMenu>
      </div>

      {/* Different Alignments */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Different Alignments</h2>
        <div className="flex gap-4">
          <DropdownMenu
            align="start"
            trigger={<button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md">Left Align</button>}
          >
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenu>

          <DropdownMenu
            align="center"
            trigger={<button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md">Center Align</button>}
          >
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenu>

          <DropdownMenu
            align="end"
            trigger={<button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md">Right Align</button>}
          >
            <DropdownMenuItem>Item 1</DropdownMenuItem>
            <DropdownMenuItem>Item 2</DropdownMenuItem>
          </DropdownMenu>
        </div>
      </div>

      {/* With Links */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">With Navigation Links</h2>
        <DropdownMenu
          trigger={
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md">
              Navigation
            </button>
          }
        >
          <DropdownMenuLabel>Quick Links</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem href="/about">
            About Us
          </DropdownMenuItem>
          <DropdownMenuItem href="/contact">
            Contact
          </DropdownMenuItem>
          <DropdownMenuItem href="/services">
            Services
          </DropdownMenuItem>
        </DropdownMenu>
      </div>
    </div>
  )
}
