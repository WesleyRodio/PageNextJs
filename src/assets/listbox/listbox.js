
import { Listbox, Transition } from "@headlessui/react";

export default function MyListbox({
  options,
  selectedValue,
  setSelectedValue,
}) {
  return (
    <Listbox value={selectedValue} onChange={setSelectedValue}>
      <Listbox.Button className="text-black text-center bg-white border border-black-300 rounded-md w-[100%] py-1 pr-3 mb-1 shadow-sm">
        {selectedValue.name}
      </Listbox.Button>
      <Transition
        enter="transition duration-50 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-37.5 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options className="absolute overflow-auto z-10 rounded-md scroll-m-0 bg-white">
          {options.map((person) => (
            <Listbox.Option
              key={person.id}
              value={person}
              className="text-black text-center bg-dark w-52 py-1 pr-3 hover:bg-rose-700 hover:text-white"
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}
