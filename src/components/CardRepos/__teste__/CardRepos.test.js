import { render, screen } from "@testing-library/react"
import CardRepos from ".."
import { convertDate } from "../../../utils"

const props = {
  name: 'teste',
  language: 'Python',
  updated_at: '2016-07-04T16:53:43Z'
}
describe('CardRepos', () => {
  test('Should render with default props', () => {
    render(<CardRepos {...props} />);
    const nameT = screen.queryByText(props.name);
    const languageT = screen.queryByText(new RegExp(props.language));
    const updated_atT = screen.queryByText(convertDate(new RegExp(convertDate(props.updated_at))));

    expect(nameT).toBeInTheDocument();
    expect(languageT).toBeInTheDocument();
    expect(updated_atT).toBeInTheDocument();

  })
})
