import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

EnzymeAdapter.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});
