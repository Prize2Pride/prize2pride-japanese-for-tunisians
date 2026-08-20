import test from "node:test";
import assert from "node:assert/strict";
import { clues, lessons, levels } from "../src/data.js";
test("covers public Japanese starter levels from A0 through B2", () => { assert.deepEqual(levels.map((level) => level.id), ["A0", "A1", "A2", "B1", "B2"]); });
test("provides dialogue-first Japanese situations with Tunisian Arabic support", () => { assert.ok(lessons.every((lesson) => lesson.arabic && lesson.turns.length >= 3)); assert.ok(lessons.every((lesson) => levels.some((level) => level.id === lesson.level))); });
test("provides answer-free reading clue choices", () => { assert.equal(clues.length, 3); });
