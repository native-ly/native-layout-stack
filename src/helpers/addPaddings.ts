export const addPaddings = (paddigns: any) => {
  // if (typeof paddigns === "number") {
  //   return { padding: paddigns };
  // }

  switch (paddings.length) {
    case 2: {
      return {
        paddingHorizontal: paddings[0],
        paddingVertical: paddings[1],
      }
    }

    case 3: {
      return {
        paddingTop: paddings[0],
        paddingHorizontal: paddings[1],
        paddingBottom: paddings[2],
      }
    }

    case 4: {
      return {
        paddingTop: paddings[0],
        paddingRight: paddings[1],
        paddingBottom: paddings[2],
        paddingLeft: paddings[3],
      }
    }

    default: {
      return { padding: paddigns }
    }
  }
}
