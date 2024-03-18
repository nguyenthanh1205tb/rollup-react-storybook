import { cn } from '@/src/lib/utils'
import * as React from 'react'

import { Badge } from '@/src/components/ui/badge'
import { Button } from '@/src/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/src/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/src/components/ui/popover'
import { Check, ChevronsUpDown, X } from 'lucide-react'

export type OptionType = {
  label: string
  value: string
}

interface MultiSelectProps {
  options: OptionType[]
  onChange: React.Dispatch<React.SetStateAction<string[]>>
  className?: string
  inputClassName?: string
  name?: string
  placeholder?: string
  value?: string[]
}

function MultiSelectField({ options, value, onChange, className, inputClassName, ...props }: MultiSelectProps) {
  // const { register } = useFormContext(); // Get the useFormContext hook
  const [open, setOpen] = React.useState(false)
  const [selected, setSelected] = React.useState<string[]>([])

  const handleUnselect = (item: string) => {
    const newValues = selected.filter(i => i !== item)
    setSelected(newValues)
    onChange && onChange(newValues)
  }

  React.useEffect(() => {
    if (value) {
      setSelected(value)
    }
  }, [value])

  return (
    <Popover open={open} onOpenChange={setOpen} {...props}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`tw-w-full tw-justify-between ${inputClassName}  ${selected.length > 1 ? 'tw-h-full' : 'tw-h-10'}`}
          onClick={() => setOpen(!open)}>
          <div className="tw-flex tw-gap-1 tw-flex-wrap tw-z-50">
            {selected.map(item => (
              <Badge variant="secondary" key={item} className="tw-mr-1 tw-mb-1" onClick={() => handleUnselect(item)}>
                {item}
                <button
                  className="tw-ml-1 tw-ring-offset-background tw-rounded-full tw-outline-none focus:tw-ring-2 focus:tw-ring-ring focus:tw-ring-offset-2"
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      handleUnselect(item)
                    }
                  }}
                  onMouseDown={e => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onClick={() => handleUnselect(item)}>
                  <X className="tw-h-3 tw-w-3 tw-text-muted-foreground hover:tw-text-foreground" />
                </button>
              </Badge>
            ))}
          </div>
          <ChevronsUpDown className="tw-h-4 tw-w-4 tw-shrink-0 tw-opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="tw-w-full tw-p-0">
        <Command className={className}>
          <CommandInput
            placeholder="Search ..."
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault()
                e.stopPropagation()
                if (e.key === 'Enter') {
                  setSelected([...selected, e.currentTarget.value])
                }
              }
            }}
          />
          <CommandList>
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup className="tw-max-h-64 tw-overflow-auto">
              {options.map(option => (
                <CommandItem
                  key={option.value}
                  onSelect={() => {
                    const newSelected = selected.includes(option.value)
                    const filtered = selected.filter(item => item !== option.value)
                    const newValues = newSelected ? filtered : [...selected, option.value]
                    setSelected(newValues)
                    onChange && onChange(newValues)
                    setOpen(true)
                  }}>
                  <Check
                    className={cn(
                      'tw-mr-2 tw-h-4 tw-w-4',
                      selected.includes(option.value) ? 'tw-opacity-100' : 'tw-opacity-0',
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { MultiSelectField }
