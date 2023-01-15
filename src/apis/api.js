const server_ep = 'http://43.201.103.199/';
const unsplash_ep = 'https://api.unsplash.com/';
const access_key = 'ZsBkiHe68NghEEyB8pQjZlViP5-sW-2Lb2DNSDAqbMI';

const request = async (end_point, url, option = {}) => {
  try {
    const fetch_url = `${end_point}${url}`;
    const res = await fetch(fetch_url, option);

    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error('API 통신 실패');
    }
  } catch (e) {
    console.error(e);
  }
};

export const getPostList = async () => await request(server_ep, '/');
export const getRandomImg = async () => await request(unsplash_ep, `photos/random?client_id=${access_key}`);

export const dummy = async (url, option = {}) => {
  await new Promise((res) => setTimeout(res, 500));

  if (url === '/') {
    return [
      {
        postId: '205',
        title: 'This is Title',
        content: 'I updated post content',
        image:
          'https://images.unsplash.com/photo-1673252413900-ca38bb9c647b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTU0MDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2MzA1NTQ&ixlib=rb-4.0.3&q=80&w=400',
        createdAt: '2023-01-13T17:23:03.485Z',
        updatedAt: '2023-01-14T03:23:54.298Z',
      },
      {
        postId: '207',
        title: 'zxcxc12',
        content: 'eqwè',
        image:
          'https://images.unsplash.com/photo-1673142911125-f6a6f57370b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTgwMjJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2MzA4NzA&ixlib=rb-4.0.3&q=80&w=1080',
        createdAt: '2023-01-13T17:27:58.068Z',
        updatedAt: '2023-01-13T17:27:58.068Z',
      },
      {
        postId: '208',
        title: '테스트1',
        content: '123',
        image:
          'https://images.unsplash.com/photo-1672425445243-a2cd1d4dff82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTg3NzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2MzU1OTE&ixlib=rb-4.0.3&q=80&w=1080',
        createdAt: '2023-01-13T18:42:00.453Z',
        updatedAt: '2023-01-13T18:46:33.689Z',
      },
      {
        postId: '209',
        title: '123',
        content: '131',
        image:
          'https://images.unsplash.com/photo-1672365328771-0f0c4eaef849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTg3NzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2MzU3MzY&ixlib=rb-4.0.3&q=80&w=1080',
        createdAt: '2023-01-13T18:48:57.994Z',
        updatedAt: '2023-01-13T18:48:57.994Z',
      },
      {
        postId: '210',
        title: 'asd',
        content: 'asd',
        image:
          'https://images.unsplash.com/photo-1671224352372-6a40361be66f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTg3NzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2MzcwMDk&ixlib=rb-4.0.3&q=80&w=1080',
        createdAt: '2023-01-13T19:10:13.571Z',
        updatedAt: '2023-01-13T19:10:13.571Z',
      },
      {
        postId: '211',
        title: 'Post Creation Test',
        content: 'this is a testing text.',
        image:
          'https://images.unsplash.com/photo-1673182770245-c4b1c119d6ea?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzOTg4NzN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2NzU2OTU&ixlib=rb-4.0.3&q=80',
        createdAt: '2023-01-13T19:29:03.901Z',
        updatedAt: '2023-01-14T05:54:57.469Z',
      },
      {
        postId: '214',
        title: 'asdasdadada',
        content: 'asdasd123123adad',
        image:
          'https://images.unsplash.com/photo-1673340191070-6865e61be364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTg3NzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2NDEyNDg&ixlib=rb-4.0.3&q=80&w=1080',
        createdAt: '2023-01-13T20:21:01.241Z',
        updatedAt: '2023-01-13T20:21:01.241Z',
      },
      {
        postId: '215',
        title: '테스트',
        content: '임니다',
        image:
          'https://images.unsplash.com/photo-1673377134996-48aaf17bbac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTg3NzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2NDQzMjI&ixlib=rb-4.0.3&q=80&w=1080',
        createdAt: '2023-01-13T21:12:06.215Z',
        updatedAt: '2023-01-14T00:27:46.553Z',
      },
      {
        postId: '217',
        title: 'gg',
        content: 'gg',
        image:
          'https://images.unsplash.com/photo-1671745992299-bffc002d7e88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTc4NDJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2NjcyOTI&ixlib=rb-4.0.3&q=80&w=1080',
        createdAt: '2023-01-14T03:34:53.619Z',
        updatedAt: '2023-01-14T03:34:53.619Z',
      },
      {
        postId: '218',
        title: 'My Photo',
        content: 'Hi',
        image:
          'https://images.unsplash.com/photo-1671795834340-77fce09826e3?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzOTg4NzN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2NzM5Njk&ixlib=rb-4.0.3&q=80',
        createdAt: '2023-01-14T05:26:20.053Z',
        updatedAt: '2023-01-14T05:26:20.053Z',
      },
      {
        postId: '219',
        title: '매우 난해한 사진',
        content: '장노출로 찍은 것으로 보이는군요',
        image:
          'https://images.unsplash.com/photo-1671955100733-75a786defe49?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzOTg4NzN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2NzQ0MjU&ixlib=rb-4.0.3&q=80',
        createdAt: '2023-01-14T05:34:06.237Z',
        updatedAt: '2023-01-14T05:34:06.237Z',
      },
      {
        postId: '220',
        title: '글 제목',
        content: '글 내용',
        image: 'https://img.freepik.com/premium-photo/small-tricolor-kitten-meows-floorroom_457211-10960.jpg?w=1060',
        createdAt: '2023-01-14T08:28:59.865Z',
        updatedAt: '2023-01-14T08:28:59.865Z',
      },
      {
        postId: '221',
        title: '글 수저어엉',
        content: '휴휴휴',
        image:
          'https://images.unsplash.com/photo-1672069347252-cacfc776b7b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTg3NzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2OTE3NjM&ixlib=rb-4.0.3&q=80&w=1080',
        createdAt: '2023-01-14T10:22:49.085Z',
        updatedAt: '2023-01-14T10:22:55.783Z',
      },
      {
        postId: '222',
        title: '123123123131',
        content: '12313131',
        image:
          'https://images.unsplash.com/photo-1671028452060-776481d1d2dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTg3NzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2OTE4ODI&ixlib=rb-4.0.3&q=80&w=1080',
        createdAt: '2023-01-14T10:24:47.887Z',
        updatedAt: '2023-01-14T10:24:47.887Z',
      },
      {
        postId: '223',
        title: 'ㄴㅌㅊㅇ',
        content: 'ㅇㅇㅍ ㄴ',
        image:
          'https://images.unsplash.com/photo-1672197339752-264445be6a45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTg3NzV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2OTYwMzc&ixlib=rb-4.0.3&q=80&w=1080',
        createdAt: '2023-01-14T11:33:59.533Z',
        updatedAt: '2023-01-14T11:33:59.533Z',
      },
      {
        postId: '224',
        title: '41',
        content: '41',
        image:
          'https://images.unsplash.com/photo-1672676374033-e26ecccb48a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTU0MDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM2OTYyODA&ixlib=rb-4.0.3&q=80&w=400',
        createdAt: '2023-01-14T11:38:01.417Z',
        updatedAt: '2023-01-14T11:38:01.417Z',
      },
      {
        postId: '225',
        title: '12341234',
        content: 'qwerasdfzxcv',
        image:
          'https://images.unsplash.com/photo-1672426780806-96f46080b7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzOTU0MDd8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzM3MDIzMzY&ixlib=rb-4.0.3&q=80&w=400',
        createdAt: '2023-01-14T13:19:06.598Z',
        updatedAt: '2023-01-14T13:19:06.598Z',
      },
    ];
  }
};
