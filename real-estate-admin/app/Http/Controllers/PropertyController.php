<?php

namespace App\Http\Controllers;

use App\Http\Requests\PropertyRequest;
use App\Models\Property;
use Illuminate\Contracts\View\View;
use Illuminate\Database\QueryException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;

class PropertyController extends Controller
{

    public function index(): View
    {
        $user = auth()->user();
        $properties = $user->properties;

        return view('properties.index', compact('properties'));
    }


    public function create(): View
    {
        return view('properties.create',['property' => null]);
    }

    public function store(PropertyRequest $request): RedirectResponse
    {
        $data = $request->validated();

        $data['img_path'] = $request->file('img_path')->store('images');

        $user = auth()->user();

        $user->properties()->create($data);

        return back()->with('status','Property created successfully');
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


    public function edit(Property $property):View
    {
        return view('properties.edit',compact('property'));
    }

    public function update(PropertyRequest $request, Property $property):RedirectResponse
    {
        $data = $request->validated();
        $imgTemp = null;
        try {
            if ($request->hasFile('img_path')) {
                $imgTemp = $property->img_path;
                $data['img_path'] = $request->file('img_path')->store('images');
            }
            $property->update($data);
        }catch (QueryException $exception){
            if ($imgTemp){
                Storage::delete($data['img_path']);
            }
            return back()->with('update','fail');
        }

        if ($imgTemp){
            Storage::delete($imgTemp);
        }

        return redirect()->action([PropertyController::class,'index'])->with('update','Property was updated');
    }


    public function destroy(Property $property): RedirectResponse
    {
        $property->delete();

        return redirect()->action([PropertyController::class,'index'])->with('delete','Property was deleted');
    }
}
