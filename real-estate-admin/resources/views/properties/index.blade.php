@extends('layouts.main')

@section('main')
   <div class="m-10">
       <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
           <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
               <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
               <tr class="text-center">
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
       <a class="block w-fit p-2 mt-2 bg-blue-400 text-white rounded" href="{{route('properties.create')}}">Add Property</a>
   </div>
@endsection
