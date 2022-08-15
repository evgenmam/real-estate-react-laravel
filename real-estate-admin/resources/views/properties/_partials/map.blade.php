<div class="flex items-center justify-center">
    <div class="bg-white p-2 rounded">
        <h4>Adds the location</h4>
        <div id="map" style="width: 400px; height: 300px;"></div>
    </div>
</div>


@section('scripts')
    <script src="{{ asset('js/mapbox.js') }}"></script>
@endsection
