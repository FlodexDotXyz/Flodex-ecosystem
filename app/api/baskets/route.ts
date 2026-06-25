export async function GET() {

  return Response.json({

    baskets: [

      {
        id: 1,
        name: "Meme Index"
      },

      {
        id: 2,
        name: "Trending Basket"
      }

    ]

  });

}
