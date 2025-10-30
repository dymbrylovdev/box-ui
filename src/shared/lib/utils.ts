import axios from 'axios';

export const getResponseMessage = (e: any) => e?.response?.data?.message || 'Network error';

// example: 10000 => '10 000'
export const formatAsThousands = (data: string | number) => String(data).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${'\u00A0'}`);

export const makeAxiosGetRequest = (
  url: string,
  setData: React.Dispatch<any>,
  setLoading: React.Dispatch<any>,
  setErr: React.Dispatch<any>,
) => {
  setLoading(true);
  axios
    .get(url)
    .then((res) => setData(res.data.data))
    .catch((err) => {
      if (err) setErr(err);
    })
    .finally(() => {
      setLoading(false);
      setErr(null);
    });
};

export const makeAxiosPostRequest = (
  url: string,
  data: any | undefined,
  setData: React.Dispatch<any>,
  setLoading: React.Dispatch<any>,
  setErr: React.Dispatch<any>,
  options?: any,
) => {
  if (!options) options = {};
  setLoading(true);
  axios
    .post(url, data, options)
    .then((res) => setData(res))
    .catch((err) => {
      if (err) setErr(err);
    })
    .finally(() => {
      setLoading(false);
      setErr(null);
    });
};

export const makeAxiosDeleteRequest = (
  url: string,
  setData: React.Dispatch<any>,
  setLoading: React.Dispatch<any>,
  setErr: React.Dispatch<any>,
) => {
  setLoading(true);
  axios
    .delete(url)
    .then((res) => setData(res))
    .catch((err) => {
      if (err) setErr(err);
    })
    .finally(() => {
      setLoading(false);
      setErr(null);
    });
};

export const thousands = (inData: string) => inData.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${'\u00A0'}`);

export const isEmail = (str: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(str).toLowerCase());
};

export const appendQuerys = (url: string, querys: string[]) => {
  let newUrl = `${url}`;
  for (let i = 0; i < querys.length; i += 1) {
    newUrl += `${i === 0 ? '?' : '&'}${querys[i]}`;
  }
  return newUrl;
};

export const maskPhone = (phone: string = '', country_code = '') => {
  if (!phone) {
    return '';
  }

  if (phone[0] !== '+') {
    phone = `+${country_code}${+phone}`;
  }

  const val = phone.replace(/\D/g, '');

  return `+${val[0]} ${val.slice(1, 4)} ${val.slice(4, 7)} ${val.slice(7, 9)} ${val.slice(9)}`;
};

export const cleanPhone = (phone: string, country = '') => phone
  .replace(country, '')
  .replace(/ /g, '')
  .replace(/[{()}]/g, '')
  .trim();

export const createLabel = (value: number) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return `${
    ['день', 'дня', 'дней'][
      value % 100 > 4 && value % 100 < 20 ? 2 : cases[value % 10 < 5 ? value % 10 : 5]
    ]
  }`;
};

export const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  // eslint-disable-next-line no-restricted-properties
  return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
};

export const generateUUID = () => {
  let id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  id = id.replace(/[xy]/g, (c) => {
    const r = Math.floor(Math.random() * 16);
    let v;
    if (c === 'x') {
      v = r;
    } else {
      // eslint-disable-next-line no-bitwise
      v = (r & 0x3) | 0x8;
    }
    return v.toString(16);
  });
  return id;
};

export const getFormatedTime = (date: string | Date) => {
  // remove seconds from time
  const timeArr = new Date(date)
    .toLocaleTimeString()
    .split(':')
    .map((i, idx) => (idx === 2 ? i.slice(2) : i));
  const time = `${timeArr[0]}:${timeArr[1]}${timeArr[2]}`;
  return time;
};
