@extends('layouts.main')

@section('main')
    <div class="grid grid-cols-2 gap-4 p-4">

        <div class="shadow-sm p-4 max-w-xl mt-6 mx-auto bg-white rounded-xl">
            @include('properties._partials.form',['btnText' => 'Update'])
        </div>

        <div class="flex items-center justify-center">
            <div class="bg-white p-2 rounded">
                <h4>Adds the location</h4>
                @include('properties._partials.map')
            </div>
        </div>
    </div>
@endsection
