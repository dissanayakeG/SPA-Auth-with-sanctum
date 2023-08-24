<?php

$rules = [
    '@Symfony' => true,
    'no_mixed_echo_print' => true,
    'phpdoc_no_empty_return' => false,
    'array_syntax' => ['syntax' => 'short'],
    'no_multiline_whitespace_around_double_arrow' => true,
    'no_trailing_comma_in_singleline_array' => true,
    'trim_array_spaces' => true,
    'normalize_index_brace' => true,
    'yoda_style' => false,
    'concat_space' => ['spacing' => 'one'],
    'not_operator_with_space' => false,
    'increment_style' => ['style' => 'post'],
    'php_unit_method_casing' => ['case' => 'snake_case'],
    'phpdoc_no_alias_tag' => false,
    'global_namespace_import' => [
        'import_classes' => true,
        'import_constants' => true,
    ],
    'phpdoc_align' => [
        'align' => 'vertical',
        'tags' => [
            'param',
            'property',
            'property-read',
            'property-write',
            'return',
            'throws',
            'type',
            'var',
            'method',
        ],
    ],
];

$finder = PhpCsFixer\Finder::create()
    ->in([
        __DIR__ . '/app',
        __DIR__ . '/config',
        __DIR__ . '/database',
        __DIR__ . '/resources',
        __DIR__ . '/routes',
        __DIR__ . '/tests',
    ]);

// $config = new PhpCsFixer\Config();
// return $config->setRules([
//     '@PSR12' => true,
//     'array_syntax' => ['syntax' => 'short'],
//     // Add more rules as needed
// ])
//     ->setFinder($finder);

return (new PhpCsFixer\Config())
    ->setUsingCache(true)
    ->setRules($rules)
    ->setFinder($finder);
