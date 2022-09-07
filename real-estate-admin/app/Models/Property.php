<?php

namespace App\Models;

use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class Property extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $guarded = [];
    protected $appends = ['img_path'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function imgPath():Attribute
    {
        return Attribute::make(
            get: fn ($value) => Storage::url($value)
        );
    }

}
