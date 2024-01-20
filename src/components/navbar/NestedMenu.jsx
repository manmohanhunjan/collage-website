import React from 'react'
import {  ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from '@material-tailwind/react'

const NestedMenu = ({placement, items, title}) => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <Menu
          placement={placement}
          open={openMenu}
          handler={setOpenMenu}
          allowHover
          offset={15}
        >
          <MenuHandler className="flex items-center justify-between">
            <MenuItem>
              {title}
              <ChevronUpIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${
                  openMenu ? "rotate-90" : ""
                }`}
              />
            </MenuItem>
          </MenuHandler>
          <MenuList>
          {items.map((item, key) => (
            <MenuItem key={key}>
              {item.title}
            </MenuItem>
          ))}
          </MenuList>
        </Menu>
  )
}

export default NestedMenu