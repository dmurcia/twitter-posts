import React from 'react'
import { Menu, MenuHandler, MenuList, MenuItem, Avatar, Typography } from '@material-tailwind/react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { HiPower } from 'react-icons/hi2'
import { useAuth } from '../../../../../../hooks'

const MenuAvatar: React.FC = () => {
  const { session, signOut } = useAuth()
  const { displayName, photoURL } = session

  return (
    <Menu>
      <MenuHandler>
        <Avatar variant="circular" alt={displayName} className="cursor-pointer" src={photoURL} />
      </MenuHandler>
      <MenuList>
        <MenuItem className="flex flex-row items-center gap-3">
          <HiOutlineUserCircle strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex flex-row items-center gap-3">
          <HiPower strokeWidth={2} className="h-4 w-4" />
          <Typography variant="small" className="font-normal" onClick={signOut}>
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default MenuAvatar
