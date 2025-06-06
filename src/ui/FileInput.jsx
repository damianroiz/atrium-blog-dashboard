import styled from 'styled-components';

const FileInput = styled.input.attrs({ type: 'file' })`
  font-size: var(--fs-12);
  border-radius: var(--border-radius-sm);
  color: var(--c-white-200);
  &::file-selector-button {
    color: var(--c-white-200);
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    background-color: var(--c-blue-700);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
    &:hover {
      background-color: var(--c-blue-600);
    }
  }
`;

export default FileInput;
