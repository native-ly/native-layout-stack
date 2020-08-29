import React from "react";
import { Text } from "react-native";
import { render } from "@testing-library/react-native";

import { Stack } from "../src";

describe("Stack", () => {
  it("should", () => {
    const { toJSON } = render(
      <Stack spacing={20} padding={10}>
        <Text>Hello</Text>

        <Text>World</Text>
      </Stack>,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
