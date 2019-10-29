import React from "react";
import moxios from "moxios";
import store from "./store";
import { PostsUpdateAction } from "./actions";

describe("Testing Asynchronous Javascript request", () => {
  beforeEach(() => {
    moxios.install();
  });
  test("Test Posts requests", () => {
    const expectedState = [
      {
        title: "A"
      },
      {
        title: "B"
      },
      {
        title: "C"
      }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });

    console.log(store.dispatch);
    return store.dispatch(PostsUpdateAction()).then(() => {
      const newState = store.getState();
      console.log(newState);
      expect(newState.posts).toBe(expectedState);
    });
  });
  afterEach(() => {
    moxios.uninstall();
  });
});
