@extends('layouts.main')

@section('main')
    <div class="shadow-sm p-4 max-w-xl mt-6 mx-auto bg-white rounded-xl">
        @include('properties._partials.form',['btnText' => 'Update'])
    </div>
@endsection
