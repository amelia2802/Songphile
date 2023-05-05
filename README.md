# Songphile
A random music player which play songs according to your moods.

# Demo
[!demo](https://user-images.githubusercontent.com/49182604/195147981-351fdc48-12ac-4cc3-b774-dd8cabdb2f2c.mp4)

## Tools/Technology:
- HTML
- CSS
- Javascript
- Spotify web api

## Genres available
| Genre         |   No of Songs |
| ------------- |:-------------:|
| romantic     | 07 |
| sad     | 07     |
| workout | 08     |
| fresh| 07     |

## Songs available
| Title         |   Genre | Title         |   Genre |Title         |   Genre |Title         |   Genre |
| ------------- |:-------------:| ------------- |:-------------:| ------------- |:-------------:| ------------- |:-------------:|
| Senorita     | romantic | Bheegi Bheegi    | sad |Believer   |workout  |Challa   |fresh  |
| Tumse Hi    | romantic    |Toh Phir Aao(Lounge version)    | sad |One Love   | workout |Aao milo chalo   |fresh  |
| Kya mujhe pyar hai | romantic    |My Heart will go on    | sad |We will rock you| workout  |Yeh ishq haye   |fresh  |
| Tu hi meri shab hai| romantic     |Aaoge jab tum     | sad |Nashe si chad gayi|workout |Aankhon mein   |fresh  |
| Bheegi si Bhagi si | romantic     |Woh Lamhe   | sad |Raftarein| workout  |In dino   |fresh  |
| Zara Zara | romantic     |----   | sad |On the floor| workout  |Masakali   |fresh  |
|  One Love | romantic     |----   | sad |Mauja Hi mauja| workout  |Doorie  |fresh  |
|  | romantic     |----   | sad |Levitating| workout  |


## Contribution guideline:

- If you want to contribute a new feature or resolve a bug you can create a issue then submit a pull request
- If you want to contribute by adding a new song then
  - Go to the /data.js file
  - Add the following code
  ```
    {
    genre: [Your genre],
    url: "the spotify url"
    },
  ```
  - If you create a new **genre** or add a song then update the readme **tables** also
  - To the get the song's url read the [Spotify Web API documentation](https://developer.spotify.com/documentation/web-api/)
    or
  - Click on the **``` ... ```** of your song
  - Click embed track
  - Check the ***show code***
  - Copy the ***src url*** only
  - Paste it
Now create a Pull request.

**If you like this project give it a 🌟**

