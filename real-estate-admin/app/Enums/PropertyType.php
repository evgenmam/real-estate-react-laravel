<?php

namespace App\Enums;

use BenSampo\Enum\Attributes\Description;
use BenSampo\Enum\Enum;
use Nuwave\Lighthouse\Schema\Types\LaravelEnumType;

//customize Enum and value descriptions
#[Description('Available propertyType')]
final class PropertyType extends Enum
{
    #[Description('Home type')]
    const HOME = 'house';

    #[Description('commercial type')]
    const COMMERCIAL = 'commercial';

    const APARTMENT = 'apartment';

    const VACANT = 'vacant';
}
// add the register for this enum in the GraphQLServiceProvider
// Register through TypeRegistry::register()
//$propertyEnumType = new LaravelEnumType(PropertyType::class);
