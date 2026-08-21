import test from "node:test";
import assert from "node:assert/strict";
import { clues, grammarReflections, lessons, levels, phrases } from "../src/data.js";
test("covers public Japanese starter levels from A0 through B2", () => { assert.deepEqual(levels.map((level) => level.id), ["A0", "A1", "A2", "B1", "B2"]); });
test("provides six dialogue-first Japanese situations per A0–B2 level with Tunisian Arabic support", () => { assert.equal(lessons.length, 30); assert.ok(lessons.every((lesson) => lesson.arabic && lesson.turns.length >= 3)); assert.ok(lessons.every((lesson) => levels.some((level) => level.id === lesson.level))); assert.ok(levels.every((level) => lessons.filter((lesson) => lesson.level === level.id).length === 6)); });
test("provides answer-free reading clue choices", () => { assert.equal(clues.length, 3); });
test("provides level-aware Japanese phrases with Tunisian Arabic review support", () => { assert.ok(phrases.length >= 15); assert.ok(phrases.every((phrase) => phrase.japanese && phrase.tunisian)); assert.ok(levels.every((level) => phrases.some((phrase) => phrase.level === level.id))); });
test("provides a descriptive answer-free grammar reflection for every dialogue level", () => { assert.deepEqual(Object.keys(grammarReflections), levels.map((level) => level.id)); assert.ok(levels.every((level) => grammarReflections[level.id].title && grammarReflections[level.id].arabic && grammarReflections[level.id].prompt && grammarReflections[level.id].tunisianPrompt)); assert.doesNotMatch(JSON.stringify(grammarReflections), /resposta certa|gabarito|model answer/i); });
