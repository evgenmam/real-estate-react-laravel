@extends('layouts.main')

@section('main')

    @if(session('update'))
        @include('layouts._partials.toast_update', ['message' => session('update')])
    @endif

    @if(session('delete'))
        @include('layouts._partials.toast_delete', ['message' => session('delete')])
    @endif

   <div class="m-10">
       <a class="block w-fit p-2 my-2 bg-blue-400 text-white rounded hover:" href="{{route('properties.create')}}">Add Property</a>

       <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
           <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
               <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
               <tr class="text-center text-base">
                   <th scope="col" class="px-6 py-3 ">
                       Name
                   </th>
                   <th scope="col" class="px-6 py-3 ">
                       Type
                   </th>
                   <th scope="col" class="px-6 py-3 ">
                       Price
                   </th>
                   <th scope="col" class="px-6 py-3 ">
                       Description
                   </th>
                   <th scope="col" class="px-6 py-3 ">
                       Rooms
                   </th>

                   <th scope="col" class="px-6 py-3 ">
                       Bathrooms
                   </th>

                   <th scope="col" class="px-6 py-3 ">
                       Coordinates
                   </th>

                   <th scope="col" class="px-6 py-3 ">
                       Actions
                   </th>
               </tr>
               </thead>
               <tbody>
                    @each('properties._partials.row',$properties,'property')
               </tbody>
           </table>
       </div>
</div>
@endsection
