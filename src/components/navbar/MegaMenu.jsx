import React from 'react'
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
} from '@material-tailwind/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MegaMenuMenu from './Menu'
import NestedMenu from './NestedMenu'

const navListMenuItems = {
  aboutUs: {
    aboutUsMenuItems: [
      {
        title: 'Governing Body',
      },
      {
        title: 'GS College Jabalpur',
      },
      {
        title: 'Organography',
      },
      {
        title: 'Parent Institute',
      },
      {
        title: 'College Committee',
      },
      {
        title: 'IQAC',
      },
      {
        title: 'NIRF',
      },
      {
        title: 'Academic Calendar',
      },
      {
        title: 'Class Teacher List',
      },
      {
        title: 'College Event Report',
      },
      {
        title: 'College Event',
      },
      {
        title: 'Gallery',
      },
    ],
    aboutUsNestedMenuItemsTitle: 'Gallery',
    aboutUsNestedMenuItems: [
      {
        title: 'Photo Gallery',
      },
      {
        title: 'Video Gallery',
      },
    ],
  },
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4 font-bold text-primaryBlue hover:text-yellowHover transition-colors cursor-pointer">
          Home
        </ListItem>
      </Typography>
      <MegaMenuMenu
        navListMenuItems={navListMenuItems.aboutUs.aboutUsMenuItems}
        menuName={'ABOUT US'}>
        <NestedMenu placement={'left'} items={navListMenuItems.aboutUs.aboutUsNestedMenuItems} title={navListMenuItems.aboutUs.aboutUsNestedMenuItemsTitle} />
      </MegaMenuMenu>
      {/* <MegaMenuMenu navListMenuItems={navListMenuItems} menuName={'MESSAGES'} />
      <MegaMenuMenu navListMenuItems={navListMenuItems} menuName={'DEPARTMENTS'} />
      <MegaMenuMenu navListMenuItems={navListMenuItems} menuName={'FACILITIES'} />
      <MegaMenuMenu navListMenuItems={navListMenuItems} menuName={'COURSES'}>
      <NestedMenu placement={'left'}/>
      </MegaMenuMenu>
      <MegaMenuMenu navListMenuItems={navListMenuItems} menuName={'G.S. FAMILY'}>
      <NestedMenu placement={'left'}/>
      <NestedMenu placement={'left'}/>
      </MegaMenuMenu>
      <MegaMenuMenu navListMenuItems={navListMenuItems} menuName={'STUDENT'} />
      <MegaMenuMenu navListMenuItems={navListMenuItems} menuName={'CONTACT US'}>
      <NestedMenu placement={'left'}/>
      </MegaMenuMenu> */}
    </List>
  )
}

const MegaMenuWithHover = () => {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  return (
    <Navbar className="mx-auto w-full  px-1 py-1">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2">
          <img src="/collageLogo.png" alt="" width="220px" height="72px" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  )
}

export default MegaMenuWithHover
