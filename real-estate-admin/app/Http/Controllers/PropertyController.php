<?php

namespace App\Http\Controllers;

use App\Http\Requests\PropertyRequest;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PropertyController extends Controller
{

    public function index()
    {
         $user = auth()->user();

         $properties = $user->properties;

//        $properties = Property::all();
        return view('properties.index', compact('properties'));
    }


    public function create()
    {
        return view('properties.create');
    }


    public function store(PropertyRequest $request)
    {
        $data = $request->validated();
        $data['img_path'] = $request->file('img_path')->store('images');

        $user = Auth::user();
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function edit(Property $property)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Property  $property
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Property $property)
    {
        //
    }


    public function destroy(Property $property): \Illuminate\Http\RedirectResponse
    {
        $property->delete();
        return redirect()->action([PropertyController::class,'index']);
    }
}
