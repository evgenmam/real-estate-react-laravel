import { useEffect } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import useMapStore from '../../store/MapStore'
import { useSearchParams } from 'react-router-dom'
import debounce from 'lodash.debounce'
import { useCallback } from 'react'

export const SearchInput = () => {
  const [params, setParams] = useSearchParams()

  const setFilters = useMapStore((state) => state.setFilters)

  const debounceOnChange = useCallback(
    debounce((e) => {
      params.set('search', e.target.value)
      setParams(params)
    }, 500),
    []
  )

  let searchParam = params.get('search')

  useEffect(() => {
    if (!searchParam) return
    setFilters({ search: searchParam })
  }, [searchParam])

  return (
    <InputGroup bg="gray.100" rounded="30px">
      <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
      <Input
        type="text"
        placeholder="Search"
        rounded="inherit"
        onChange={debounceOnChange}
      />
    </InputGroup>
  )
}
