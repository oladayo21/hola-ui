import { useState } from 'react'

import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Badge } from './components/ui/badge'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/ui/card'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './components/ui/select'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from './components/ui/dialog'
import { Menu, MenuTrigger, MenuContent, MenuItem, MenuSeparator } from './components/ui/menu'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './components/ui/table'
import { Tooltip, TooltipTrigger, TooltipContent } from './components/ui/tooltip'
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from './components/ui/popover'
import { Switch } from './components/ui/switch'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-lg font-medium text-text-primary mb-4 pb-2 border-b border-border-subtle">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-text-muted text-xs w-24 shrink-0">{label}</span>
      <div className="flex items-center gap-2 flex-wrap">{children}</div>
    </div>
  )
}

function App() {
  const [switchOn, setSwitchOn] = useState(false)

  return (
    <div className="min-h-screen bg-bg-primary p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-2">hola-ui</h1>
      <p className="text-text-secondary mb-8">Component playground</p>

      <Section title="Button">
        <Row label="Variants">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
        </Row>
        <Row label="Sizes">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Row>
        <Row label="Disabled">
          <Button disabled>Disabled</Button>
        </Row>
      </Section>

      <Section title="Input">
        <Row label="Default">
          <Input placeholder="Enter text..." className="w-64" />
        </Row>
        <Row label="Ghost">
          <Input variant="ghost" placeholder="Ghost input..." className="w-64" />
        </Row>
        <Row label="Sizes">
          <Input size="sm" placeholder="Small" className="w-32" />
          <Input size="md" placeholder="Medium" className="w-32" />
          <Input size="lg" placeholder="Large" className="w-32" />
        </Row>
      </Section>

      <Section title="Textarea">
        <Row label="Default">
          <Textarea placeholder="Enter multiline text..." className="w-64" />
        </Row>
        <Row label="Ghost">
          <Textarea variant="ghost" placeholder="Ghost textarea..." className="w-64" />
        </Row>
      </Section>

      <Section title="Badge">
        <Row label="Variants">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </Row>
        <Row label="Sizes">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
        </Row>
      </Section>

      <Section title="Switch">
        <Row label="Default">
          <Switch checked={switchOn} onCheckedChange={setSwitchOn} />
          <span className="text-text-secondary text-xs">{switchOn ? 'On' : 'Off'}</span>
        </Row>
        <Row label="Sizes">
          <Switch size="sm" />
          <Switch size="md" />
        </Row>
        <Row label="Disabled">
          <Switch disabled />
          <Switch disabled checked />
        </Row>
      </Section>

      <Section title="Select">
        <Row label="Default">
          <Select defaultValue="option1">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </Row>
      </Section>

      <Section title="Card">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-text-secondary">Card content with some example text.</p>
          </CardContent>
          <CardFooter className="gap-2">
            <Button variant="secondary" size="sm">Cancel</Button>
            <Button size="sm">Save</Button>
          </CardFooter>
        </Card>
      </Section>

      <Section title="Table">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Homepage</TableCell>
              <TableCell><Badge variant="success">Live</Badge></TableCell>
              <TableCell className="text-text-muted">Web</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Black Friday</TableCell>
              <TableCell><Badge variant="warning">Draft</Badge></TableCell>
              <TableCell className="text-text-muted">Web</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>App Promo</TableCell>
              <TableCell><Badge variant="success">Live</Badge></TableCell>
              <TableCell className="text-text-muted">App</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Settings</TabsTrigger>
            <TabsTrigger value="tab3">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <p className="text-text-secondary">Overview content goes here.</p>
          </TabsContent>
          <TabsContent value="tab2">
            <p className="text-text-secondary">Settings content goes here.</p>
          </TabsContent>
          <TabsContent value="tab3">
            <p className="text-text-secondary">Analytics content goes here.</p>
          </TabsContent>
        </Tabs>
      </Section>

      <Section title="Dialog">
        <Row label="Default">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm Action</DialogTitle>
                <DialogDescription>Are you sure you want to proceed? This action cannot be undone.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="secondary">Cancel</Button>
                </DialogClose>
                <Button>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Row>
      </Section>

      <Section title="Menu">
        <Row label="Dropdown">
          <Menu>
            <MenuTrigger asChild>
              <Button variant="secondary">Actions</Button>
            </MenuTrigger>
            <MenuContent>
              <MenuItem>Edit</MenuItem>
              <MenuItem>Duplicate</MenuItem>
              <MenuItem>Archive</MenuItem>
              <MenuSeparator />
              <MenuItem>Delete</MenuItem>
            </MenuContent>
          </Menu>
        </Row>
      </Section>

      <Section title="Tooltip">
        <Row label="Default">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="secondary">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>This is a tooltip</TooltipContent>
          </Tooltip>
        </Row>
      </Section>

      <Section title="Popover">
        <Row label="Default">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <p className="text-text-secondary mb-3">Popover content with more details.</p>
              <PopoverClose asChild>
                <Button size="sm">Close</Button>
              </PopoverClose>
            </PopoverContent>
          </Popover>
        </Row>
      </Section>
    </div>
  )
}

export default App
