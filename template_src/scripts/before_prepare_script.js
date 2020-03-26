#!/usr/bin/env node
var shell = require( "shelljs" )

shell.exec( "iconerator --only-ios ./res/ios.png ./res" )
shell.exec( "iconerator --only-android ./res/android.png ./res" )
