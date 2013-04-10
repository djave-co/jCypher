Cypher
======

A lightweight text cyphering jQuery plugin.

Usage
-----

Basic usage:

    $(document).ready(function(){
        $("#target").jCypher();
    });

Options:

    // The phrase to cypher (defaults to node's contents)
    'cypher_text'		: this.text(),
    // How many times to cypher before the first solve
    'start'			: 10,
    // How many cyphers between the letters solving
    'offset'		: 5,
    // How frequently (milliseconds) the numbers change
    'frequency'		: 60,
    // which div to act on
    'target'		: this,
    // If set to true, will output to console on complete
    'console_log'       : false,
    // What to do when it finishes
    'callback'       : null