<?php

namespace App\Http\Controllers;

use App\Http\Requests\PropertyRequest;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class PropertyController extends Controller
{

    public function index()
    {
         $user = auth()->user();
         $properties = $user->properties;
        return view('properties.index', compact('properties'));
    }


    public function create()
    {
        return view('properties.create',['property' => null]);
    }


    public function store(PropertyRequest $request)
    {
        $data = $request->validated();
        $data['img_path'] = $request->file('img_path')->store('images');

        $user = auth()->user();
        $user->properties()->create($data);
        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function show(Property $property)
    {
    }


    public function edit(Property $property)
    {
        return view('properties.edit',compact('property'));
    }

    public function update(PropertyRequest $request, Property $property)
    {

        if ($request->hasFile('img_path')){

            Storage::delete($property->img_path);
            $property->fill($request->validated());
            $property['img_path'] = $request->file('img_path')->store('images');

            $property->save();
        } else {
            $property->update( array_filter( $request->validated()));
        }

        return redirect()->action([PropertyController::class,'index']);
    }


    public function destroy(Property $property): \Illuminate\Http\RedirectResponse
    {
        $property->delete();
        return redirect()->action([PropertyController::class,'index']);
    }
}
