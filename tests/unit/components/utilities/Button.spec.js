import { shallowMount } from "@vue/test-utils";
import Button from "@/components/utilities/Button.vue";

describe("Button.vue", () => {
  it("Renders button component with the slot content", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button Text"
      }
    });
    expect(wrapper.text()).toBe("Button Text");
  });
});
