import { useState, useEffect } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import useMapStore from '../../store/MapStore'

export const SearchInput = () => {
  const [search, setSearch] = useState('')

  const setFilters = useMapStore((state) => state.setFilters)

  useEffect(() => {
    setFilters({ search: search })
  }, [search])

  return (
    <InputGroup bg="gray.100" rounded="30px">
      <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
      <Input
        type="text"
        placeholder="Search"
        rounded="inherit"
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
    </InputGroup>
  )
}
