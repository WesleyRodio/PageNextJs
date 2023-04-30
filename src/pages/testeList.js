import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

function MyListbox() {
    const [selectedPerson, setSelectedPerson] = useState(people[0])
  
    return (
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Label>Assignee:</Listbox.Label>
        <Listbox.Button>{selectedPerson.name}</Listbox.Button>
        <Listbox.Options>
          {people.map((person) => (
            <Listbox.Option key={person.id} value={person}>
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    )
  }

export default function Test(){
    return (
        <>
            <MyListbox />
        </>
    )
}