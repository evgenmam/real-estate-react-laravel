<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static HOME()
 * @method static static COMMERCIAL()
 * @method static static APARTMENT()
 */
final class PropertyType extends Enum
{
    const HOME = "house";
    const COMMERCIAL = "commercial";
    const APARTMENT = "apartment";
    const VACANT = "vacant";
}
