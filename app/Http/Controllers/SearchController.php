<?php

namespace App\Http\Controllers;

use App\Models\Item; // 検索対象のモデルを指定
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $searchTerm = $request->input('query');

        $results = Item::where('name', 'like', '%'.$searchTerm.'%')->get();

        return view('item.index', ['items' => $results]);
    }
}
