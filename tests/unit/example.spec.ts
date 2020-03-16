import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Library    Home Tabs  Register  Login Popular Recent Rising";
    const wrapper = shallowMount(Navbar);
    expect(wrapper.text()).toMatch(msg);
  });
});
