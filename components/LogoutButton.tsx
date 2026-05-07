'use client'
import { createClient } from '@/utils/supabase/client'

export default function LogoutButton() {
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut({ scope: 'global' }) // Forces a full session clear
    window.location.href = '/' // Use hard redirect to clear any cached states
}

  return (
    <button onClick={handleLogout} className="text-red-500 underline">
      Logout
    </button>
  )
}