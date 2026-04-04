import Link from 'next/link'
import { CircleXIcon } from 'lucide-react'
 
export default function NotFound() {
  return (
    <div className='bg-foreground text-background w-screen h-screen flex items-center justify-center flex-col'>
      <CircleXIcon className='w-16 h-16 text-red-500' />
      <h2 className='text-2xl font-bold text-center'>Not Found</h2>
      <p className='text-center'>Could not find requested resource</p>
      <Link href="/" className='mt-4'>
        Return Home
      </Link>
    </div>
  )
}