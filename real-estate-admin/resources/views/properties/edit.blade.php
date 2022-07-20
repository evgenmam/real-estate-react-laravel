@extends('layouts.main')

@section('main')
    <div class="grid grid-cols-2 gap-4 p-4">

    <div class="shadow-sm p-4 max-w-xl mt-6 mx-auto bg-white rounded-xl">
        @include('properties._partials.form',['btnText' => 'Update'])
    </div>

    @include('properties._partials.map')
    </div>

@endsection
