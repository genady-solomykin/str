

fetch('https://run.mocky.io/v3/c161af5e-dc90-4175-94ae-f29fe9067ab5').then((res) => res.json()).then((response) => {

  console.log(response.items);
  if(response?.items) {
  	const storiesOptions = [];
    
    response.items.forEach((story) => {
      const readyStory = {
        id: story.story_id,
				name: story.name,
        photo: story.thumbnail,
				items: [],
			};
      
      readyStory.items = story.contents.map((item) => ({
        id: item.content_id,
				type: item.type,
        url: item.content_path,
        prod: item.link
      }));
      
			storiesOptions.push(readyStory);

      console.log(readyStory);
    })
    
		stroriesAjaxResponse(storiesOptions);
  }
})

function stroriesAjaxResponse(stories) {
  new StoriesSlider(document.getElementById("app-stories"), { stories });
}

