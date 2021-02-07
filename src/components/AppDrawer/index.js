import { Drawer, DrawerHeader, DrawerContent } from 'mdc-react'

const AppDrawer = () => {
  return (
    <Drawer id='app-drawer'>
      <DrawerHeader title='React Todo' />

      <DrawerContent></DrawerContent>
    </Drawer>
  )
}
export default AppDrawer
