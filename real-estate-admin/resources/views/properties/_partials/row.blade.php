<tr class="bg-white dark:bg-gray-800 text-center">
    <td class="px-6 py-4">
        {{$property->name}}
    </td>
    <td class="px-6 py-4">
        {{$property->type}}
    </td>

    <td class="px-6 py-4">
        ${{$property->price}}
    </td>

    <td class="px-6 py-4">
        {{$property->description}}
    </td>

    <td class="px-6 py-4">
        {{$property->rooms}}
    </td>

    <td class="px-6 py-4">
        {{$property->bathrooms}}
    </td>

    <td class="px-6 py-4">
        {{$property->latitude}}, {{$property->longitude}}
    </td>
    <td class="px-6 py-4 text-right">
        <a href="#" class="font-medium text-blue-600 dark:text-blue-500">Edit</a>
        <form action="{{route('properties.destroy',['property'=>$property->id])}}" method="post">
            @method('DELETE')
            @csrf
            <button class="font-medium text-red-600 dark:text-red-500">Remove</button>
        </form>
    </td>
</tr>
