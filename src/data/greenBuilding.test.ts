import test from 'node:test';
import assert from 'node:assert/strict';
import { GREEN_BUILDING_EXAMPLES } from './greenBuildingExamples';
import { SLIDES_DATA } from './presentationData';

test('every slide from 1 to 20 has a valid green building example', () => {
  assert.equal(SLIDES_DATA.length, 20);

  for (let i = 1; i <= 20; i++) {
    const example = GREEN_BUILDING_EXAMPLES[i];
    assert.ok(example, `Slide ${i} must have a green building example`);
    assert.equal(example.slideId, i);
    assert.ok(example.name.length > 0, `Slide ${i} name must not be empty`);
    assert.ok(example.location.length > 0, `Slide ${i} location must not be empty`);
    assert.ok(example.ratingBadge.length > 0, `Slide ${i} rating badge must not be empty`);
    assert.ok(example.imageUrl.length > 0, `Slide ${i} imageUrl must not be empty`);
    assert.ok(example.structuralHighlights.length >= 2, `Slide ${i} must have at least 2 structural highlights`);
    assert.ok(example.metrics.length >= 2, `Slide ${i} must have at least 2 metrics`);
  }
});

test('key 3D renders are properly designated', () => {
  // Slide 1, 4, 7, 10, 11, 13, 18, 20 have local custom 3D renders
  assert.equal(GREEN_BUILDING_EXAMPLES[1].is3dRender, true);
  assert.equal(GREEN_BUILDING_EXAMPLES[4].is3dRender, true);
  assert.equal(GREEN_BUILDING_EXAMPLES[11].is3dRender, true);
  assert.equal(GREEN_BUILDING_EXAMPLES[13].is3dRender, true);
});
