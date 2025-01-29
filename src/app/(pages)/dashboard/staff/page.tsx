"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const initialStaff = [
  { id: 1, name: "John Doe", position: "Chef", contact: "123-456-7890" },
  { id: 2, name: "Jane Smith", position: "Waiter", contact: "234-567-8901" },
  { id: 3, name: "Bob Johnson", position: "Manager", contact: "345-678-9012" },
]

export default function Staff() {
  const [staff, setStaff] = useState(initialStaff)
  const [newStaff, setNewStaff] = useState({ name: "", position: "", contact: "" })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewStaff({ ...newStaff, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStaff([...staff, { id: staff.length + 1, ...newStaff }])
    setNewStaff({ name: "", position: "", contact: "" })
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Staff</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Staff List</h2>
          {staff.map((member) => (
            <Card key={member.id} className="mb-4">
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Position: {member.position}</p>
                <p>Contact: {member.contact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Add New Staff</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={newStaff.name} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="position">Position</Label>
                <Input id="position" name="position" value={newStaff.position} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="contact">Contact</Label>
                <Input id="contact" name="contact" value={newStaff.contact} onChange={handleInputChange} required />
              </div>
              <Button type="submit">Add Staff Member</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

