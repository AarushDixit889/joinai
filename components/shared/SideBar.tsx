import Image from 'next/image'
import { authClient } from '@/auth-client'
import { useEffect, useState } from 'react'
import { navLinks } from '@/constants'
import Link from 'next/link'
import { DollarSignIcon } from 'lucide-react'

const SideBar = () => {
  const [data, setData] = useState({ name: "" })
  const fetchUser = async () => {
    let user: any = await authClient.getSession()
    user = user.data?.user
    return user
  }
  useEffect(() => {
    const temp = fetchUser()
    temp
      .then((data) => {
        setData(data)
      })
  }, [])
  return (
    <div className='min-h-[100vh] min-w-[20vw] px-5 py-3 bg-[#181818] text-white hidden md:flex flex-col justify-between'>
      <div className="flex flex-col gap-y-5">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={"/logo.svg"}
            alt='logo'
            width={50}
            height={50}
          />
          <h4 className="text-lg">JoinAI</h4>
        </div>
        <h3 className="lg:text-2xl md:text-xl text-lg">
          Welcome,
        </h3>
      </div>

      <div className="flex flex-col gap-y-2 px-2">
        {
          navLinks.map((link, index) => (
            <Link href={link.link} key={index} className='flex flex-row gap-x-2 px-4 py-2 hover:bg-[#272727] rounded-lg'>
              <link.icon color='#FFF' />
              <span>{link.name}</span>
            </Link>
          ))
        }
      </div>

      <Link href={"/buy-credits"} className='flex flex-row gap-x-1 px-4 py-2 hover:bg-[#272727] rounded-lg mb-10'>
        <DollarSignIcon />
        <span>Credits: </span>
      </Link>
    </div>
  )
}

export default SideBar