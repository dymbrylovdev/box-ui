import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { $api } from 'shared/config/api/api';
import { loginByUsername } from './loginByUsername';

jest.mock('shared/config/api/api');

const mockedApi = $api as jest.Mocked<typeof $api>;
describe('loginByUsername.test', () => {
  test('success login', async () => {
    const userData = { username: 'admin', password: '123' };
    mockedApi.post.mockReturnValue(Promise.resolve({ data: userData }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(userData);

    expect(mockedApi.post).toHaveBeenCalledWith('/login', userData);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('error login', async () => {
    const userData = { username: 'admin', password: '123' };
    // eslint-disable-next-line prefer-promise-reject-errors
    mockedApi.post.mockReturnValue(Promise.reject({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(userData);

    expect(mockedApi.post).toHaveBeenCalledWith('/login', userData);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('error');
  });
});
