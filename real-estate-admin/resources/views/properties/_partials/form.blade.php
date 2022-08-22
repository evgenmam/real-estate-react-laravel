<form action="{{ isset($property)
                    ? route('properties.update', ['property' => $property->id])
                    : route('properties.store')}}" method="post" enctype="multipart/form-data">
    @csrf

    @if($property)
        @method('PATCH')
    @endif


    <div class="">
        <label class="block py-2">
            <span class="text-gray-700">Name</span>
            <input type="text" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder=""
                   name="name"
                   value="{{old('name', $property?->name)}}"
            >
        </label>
        @error('name')
            <div class="text-red-600 text-sm">{{$message}}</div>
        @enderror

        <label class="block py-2">
            <span class="text-gray-700">Description</span>
            <textarea class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      rows="3"
                      name="description"

            >{{old('description', $property?->description)}}</textarea>
        </label>
        @error('description')
            <div class="text-red-600 text-sm">{{$message}}</div>
        @enderror

        <div class="flex gap-2">
            <div class="w-full">
                <label class="block py-2">
                    <span class="text-gray-700">type</span>
                    <select class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                            name="type"
                    >
                        <option value="">select type</option>
                        @foreach(\App\Enums\PropertyType::getValues() as $type)
                            <option value="{{$type}}" @selected(old('type', $property?->type) == $type)>{{$type}}</option>
                        @endforeach

                    </select>
                </label>
                @error('type')
                    <div class="text-red-600 text-sm">{{$message}}</div>
                @enderror
            </div>

            <div class="w-full">
                <label class="block py-2">
                    <span class="text-gray-700">price</span>
                    <input type="number" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           name="price"
                           value="{{old('price', $property?->price)}}"
                    >
                </label>
                @error('price')
                    <span class="text-red-600 text-sm">{{$message}}</span>
                @enderror
            </div>
        </div>

        <div class="flex gap-2">
            <div>
                <label class="block py-2">
                    <span class="text-gray-700">Rooms</span>
                    <input type="number" class="
                        mt-1
                        block
                        w-full
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                       name="rooms" value="{{old('rooms', $property?->rooms)}}"
                    >
                </label>
                @error('rooms')
                    <span class="text-red-600 text-sm">{{$message}}</span>
                @enderror
            </div>

            <div>
                <label class="block py-2">
                    <span class="text-gray-700">Bathrooms</span>
                    <input type="number" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                       name="bathrooms"
                       value="{{old('bathrooms', $property?->bathrooms)}}"
                    >
                </label>
                @error('bathrooms')
                    <span class="text-red-600 text-sm">{{$message}}</span>
                @enderror
            </div>

        </div>

        <div class="flex gap-2">
            <label class="block py-2">
                <span class="text-gray-700">Latitude (Y)</span>
                <input type="number" step="any" class="
                    lat
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "

                       name="latitude"
                       value="{{old('latitude', $property?->latitude)}}"
                       title="click the map to add"
                >
                @error('latitude')
                    <span class="text-red-600 text-sm">{{$message}}</span>
                @enderror
            </label>

            <label class="block py-2">
                <span class="text-gray-700">Longitude (X)</span>
                <input type="number" step="any" class="
                    lng
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "

                   name="longitude"
                   value="{{old('longitude', $property?->longitude)}}"

                >
                @error('longitude')
                    <span class="text-red-600 text-sm">{{$message}}</span>
                @enderror
            </label>
        </div>

        <label class="block py-2">
            <span class="text-gray-700">Upload Photos</span>
            <input type="file" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                   name="img_path"
                   multiple
            >
        </label>
        @error('img_path')
            <div class="text-red-600 text-sm pb-2">{{$message}}</div>
        @enderror

        <button class="text-white bg-blue-500 rounded-xl py-2 w-full">{{$btnText}}</button>
    </div>
</form>
