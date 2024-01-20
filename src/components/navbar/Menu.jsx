import React from 'react'
import {
    Collapse,
    Typography,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
  } from '@material-tailwind/react'
  import {
    ChevronDownIcon,
  } from '@heroicons/react/24/outline'

const MegaMenuMenu = ({children, navListMenuItems, menuName}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const renderItems = navListMenuItems.map(
    ({ title }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          {/* <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {' '}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: 'h-6 text-gray-900 w-6',
            })}
          </div> */}
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold">
              {title}
            </Typography>
            {/* <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500">
              {description}
            </Typography> */}
          </div>
        </MenuItem>
      </a>
    )
  )

  return (
    <React.Fragment>
      <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}>
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-0 py-2 pr-2 font-bold text-primaryBlue hover:text-yellowHover transition-colors cursor-pointer"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}>
              {menuName}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 ml-1 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-row gap-y-2 outline-none outline-0">
            {renderItems}
            {children}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}{children}</Collapse>
      </div>
    </React.Fragment>
  )
}

export default MegaMenuMenu