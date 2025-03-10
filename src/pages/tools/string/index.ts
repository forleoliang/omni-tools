import { tool as stringRemoveDuplicateLines } from './remove-duplicate-lines/meta';
import { tool as stringRotate } from './rotate/meta';
import { tool as stringQuote } from './quote/meta';
import { tool as stringRot13 } from './rot13/meta';
import { tool as stringReverse } from './reverse/meta';
import { tool as stringRandomizeCase } from './randomize-case/meta';
import { tool as stringUppercase } from './uppercase/meta';
import { tool as stringExtractSubstring } from './extract-substring/meta';
import { tool as stringCreatePalindrome } from './create-palindrome/meta';
import { tool as stringPalindrome } from './palindrome/meta';
import { tool as stringToMorse } from './to-morse/meta';
import { tool as stringSplit } from './split/meta';
import { tool as stringJoin } from './join/meta';
import { tool as stringReplace } from './text-replacer/meta';
import { tool as stringRepeat } from './repeat/meta';
import { tool as stringTruncate } from './truncate/meta';

export const stringTools = [
  stringSplit,
  stringJoin,
  stringRemoveDuplicateLines,
  stringToMorse,
  stringReplace,
  stringRepeat,
  stringTruncate
  // stringReverse,
  // stringRandomizeCase,
  // stringUppercase,
  // stringExtractSubstring,
  // stringCreatePalindrome,
  // stringPalindrome
];
