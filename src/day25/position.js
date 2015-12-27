"use strict";

module.exports = ({row, column}) => (column-1)*(row-1) + (column)*(column+1)/2 + (row)*(row-1)/2